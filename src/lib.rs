//! Calloop, a Callback-based Event Loop
//!
//! This crate provides an `EventLoop` type, which is a small abstraction
//! over an `mio`-based event loop. The main difference between this crate
//! and other traditional rust event loops is that it is based on callbacks:
//! you can register several event sources, each being associated with a callback
//! closure that will be invoked whenever the associated event source generates
//! events.
//!
//! This crate was initially an implementation detail of `wayland-server`, and has been
//! split-off for reuse. I expect it to be more useful for GUI programs or graphical
//! servers (like wayland-based apps) than performance critial networking code, which are
//! more versed towards `tokio` and async-await. It mostly shines in the conception of
//! modular infrastructures, allowing different modules to use the same event loop without
//! needing to know about each other.
//!
//! ## How to use it
//!
//! ```no_run
//! extern crate calloop;
//!
//! use std::time::Duration;
//!
//! fn main() {
//!     // Create the event loop
//!     let mut event_loop = calloop::EventLoop::new().expect("Failed to initialize the event loop!");
//!     // Retrieve an handle. It is used to insert new sources into the event loop
//!     // It can be cloned, allowing you to insert sources from within sources
//!     let handle = event_loop.handle();
//!
//!     /*
//!      * Setup your program, inserting event sources in the loop
//!      */
//!
//!     // Actual run of your loop
//!     loop {
//!         // Dispatch received events to their callbacks, waiting at most 20 ms for
//!         // new events
//!         //
//!         // The `&mut shared_data` is a mutable reference that will be forwarded to all
//!         // your callbacks, allowing them to easily share some state
//! #       let mut shared_data = unimplemented!();
//!         event_loop.dispatch(Some(Duration::from_millis(20)), &mut shared_data);
//!
//!         /*
//!          * Insert here the processing you need to do do between each event loop run
//!          * like your drawing logic if you're doing a GUI app for example.
//!          */
//!     }
//! }
//! ```
//!
//! ## Event source types
//!
//! The event loop is backed by `mio`, as such anything implementing the `mio::Evented` trait
//! can be used as an event source, with some adapter code (see the `EventSource` trait).
//!
//! This crate also provide some adapters for common event sources such as:
//!
//! - MPSC channels
//! - Timers
//! - unix signals
//!
//! As well as generic `mio::Evented` objects.
//!
//! It is also possible to insert "idle" callbacks. These callbacks represent computations that
//! need to be done at some point, but are not as urgent as processing the events. These callbacks
//! are stored and then executed during `EventLoop::dispatch(..)`, once all events from the sources
//! have been processed.
//!
//! ## Custom event sources
//!
//! You can create custom event sources can will be inserted in the event loop by
//! implementing the `EventSource` trait. This notably involves the creation of an
//! internal type implementing the `EventDispatcher` trait, that will convert
//! readiness notifications from `mio` into events generated by your sources. For example,
//! by reading the new messages from a display server socket and producing an event and
//! calling the user callback for each of them.

#![warn(missing_docs)]

pub extern crate mio;
extern crate mio_extras;
#[cfg(target_os = "linux")]
extern crate nix;

pub use self::loop_logic::{EventLoop, LoopHandle, LoopSignal};
pub use self::sources::*;

mod list;
mod loop_logic;
mod sources;

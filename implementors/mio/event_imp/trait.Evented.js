(function() {var implementors = {};
implementors["calloop"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/mio/0.6.16/mio/event_imp/trait.Evented.html\" title=\"trait mio::event_imp::Evented\">Evented</a> for <a class=\"struct\" href=\"calloop/channel/struct.Channel.html\" title=\"struct calloop::channel::Channel\">Channel</a>&lt;T&gt;",synthetic:false,types:["calloop::sources::channel::Channel"]},{text:"impl&lt;F:&nbsp;<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/std/sys/unix/ext/io/trait.AsRawFd.html\" title=\"trait std::sys::unix::ext::io::AsRawFd\">AsRawFd</a>&gt; <a class=\"trait\" href=\"https://docs.rs/mio/0.6.16/mio/event_imp/trait.Evented.html\" title=\"trait mio::event_imp::Evented\">Evented</a> for <a class=\"struct\" href=\"calloop/generic/struct.EventedFd.html\" title=\"struct calloop::generic::EventedFd\">EventedFd</a>&lt;F&gt;",synthetic:false,types:["calloop::sources::generic::EventedFd"]},{text:"impl&lt;E:&nbsp;<a class=\"trait\" href=\"https://docs.rs/mio/0.6.16/mio/event_imp/trait.Evented.html\" title=\"trait mio::event_imp::Evented\">Evented</a> + 'static&gt; <a class=\"trait\" href=\"https://docs.rs/mio/0.6.16/mio/event_imp/trait.Evented.html\" title=\"trait mio::event_imp::Evented\">Evented</a> for <a class=\"struct\" href=\"calloop/generic/struct.Generic.html\" title=\"struct calloop::generic::Generic\">Generic</a>&lt;E&gt;",synthetic:false,types:["calloop::sources::generic::Generic"]},{text:"impl <a class=\"trait\" href=\"https://docs.rs/mio/0.6.16/mio/event_imp/trait.Evented.html\" title=\"trait mio::event_imp::Evented\">Evented</a> for <a class=\"struct\" href=\"calloop/signals/struct.Signals.html\" title=\"struct calloop::signals::Signals\">Signals</a>",synthetic:false,types:["calloop::sources::signals::Signals"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://docs.rs/mio/0.6.16/mio/event_imp/trait.Evented.html\" title=\"trait mio::event_imp::Evented\">Evented</a> for <a class=\"struct\" href=\"calloop/timer/struct.Timer.html\" title=\"struct calloop::timer::Timer\">Timer</a>&lt;T&gt;",synthetic:false,types:["calloop::sources::timer::Timer"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()

(function() {var implementors = {};
implementors["calloop"] = [{text:"impl&lt;Data&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"calloop/struct.EventLoop.html\" title=\"struct calloop::EventLoop\">EventLoop</a>&lt;Data&gt;",synthetic:true,types:["calloop::loop_logic::EventLoop"]},{text:"impl&lt;Data&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"calloop/struct.LoopHandle.html\" title=\"struct calloop::LoopHandle\">LoopHandle</a>&lt;Data&gt;",synthetic:true,types:["calloop::loop_logic::LoopHandle"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"calloop/struct.LoopSignal.html\" title=\"struct calloop::LoopSignal\">LoopSignal</a>",synthetic:true,types:["calloop::loop_logic::LoopSignal"]},{text:"impl&lt;E&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"calloop/struct.Source.html\" title=\"struct calloop::Source\">Source</a>&lt;E&gt;",synthetic:true,types:["calloop::sources::Source"]},{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"calloop/struct.Idle.html\" title=\"struct calloop::Idle\">Idle</a>",synthetic:true,types:["calloop::sources::Idle"]},{text:"impl&lt;T&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"calloop/channel/struct.Channel.html\" title=\"struct calloop::channel::Channel\">Channel</a>&lt;T&gt;",synthetic:true,types:["calloop::sources::channel::Channel"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"enum\" href=\"calloop/channel/enum.Event.html\" title=\"enum calloop::channel::Event\">Event</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:true,types:["calloop::sources::channel::Event"]},{text:"impl&lt;E&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"calloop/generic/struct.Generic.html\" title=\"struct calloop::generic::Generic\">Generic</a>&lt;E&gt;",synthetic:true,types:["calloop::sources::generic::Generic"]},{text:"impl&lt;E&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"calloop/generic/struct.Event.html\" title=\"struct calloop::generic::Event\">Event</a>&lt;E&gt;",synthetic:true,types:["calloop::sources::generic::Event"]},{text:"impl&lt;F&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"calloop/generic/struct.EventedFd.html\" title=\"struct calloop::generic::EventedFd\">EventedFd</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a>,&nbsp;</span>",synthetic:true,types:["calloop::sources::generic::EventedFd"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"calloop/signals/struct.Event.html\" title=\"struct calloop::signals::Event\">Event</a>",synthetic:true,types:["calloop::sources::signals::Event"]},{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"calloop/signals/struct.Signals.html\" title=\"struct calloop::signals::Signals\">Signals</a>",synthetic:true,types:["calloop::sources::signals::Signals"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"calloop/timer/struct.Timer.html\" title=\"struct calloop::timer::Timer\">Timer</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["calloop::sources::timer::Timer"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Sync.html\" title=\"trait core::marker::Sync\">Sync</a> for <a class=\"struct\" href=\"calloop/timer/struct.TimerHandle.html\" title=\"struct calloop::timer::TimerHandle\">TimerHandle</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["calloop::sources::timer::TimerHandle"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()

<?php
?>

<html>
    <head>
    </head>
    <body>
        <h2>Testiranje JavaScript Scope-a</h2>

        {{--<script>let a = "Different tag variable"</script>--}}
        {{--<script type="text/javascript" src="{{ URL::asset('js/allHelp.js') }}"></script>--}}
        <script type="text/javascript" src="{{ URL::asset('js/all.js') }}"></script>
        <script type="text/javascript" src="{{ URL::asset('js/allHelp.js') }}"></script>
        <script>let a = "Different tag variable"</script>
        <script>console.log(test(a))</script>
        <script>console.log(test(c))</script>
    </body>
</html>

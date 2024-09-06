<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        
        @viteReactRefresh      
        @vite('resources/js/app.js')
    </head>
    <body>
        <div id="codeareact"></div>
    </body>
</html>
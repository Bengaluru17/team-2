var OnePixel = function()
{
    function log()
    {
        var entries = Math.floor(arguments.length / 2)
        var query = ''
        var sep = '?'
        var i
        for (i = 0; i < entries; i++) {
            var key = encodeURIComponent(arguments[2 * i])
            var val = encodeURIComponent(arguments[2 * i + 1])
            query += sep + key + '=' + val
            if (sep == '?')
                sep = '&'
        }
        var now = new Date()
        var meta = [
            'url', document.URL,
            'ref', document.referrer != '' ? document.referrer : 'none',
            'time', now + ' (' + now.getTime() + ')'
        ]
        entries = Math.floor(meta.length / 2)
        for (i = 0; i < entries; i++) {
            var key = encodeURIComponent(meta[2 * i])
            var val = encodeURIComponent(meta[2 * i + 1])
            query += sep + key + '=' + val
            if (sep == '?')
                sep = '&'
        }
        var image = new Image();
    }
    return {
        log: log
    }
}()

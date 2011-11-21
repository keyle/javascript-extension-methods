String.prototype.daysFromNow = function()
{
	var dateString = this;

	if(!dateString)
		return;

	var target = new Date(dateString);
	var millisecsDiff = target - new Date();
	var days = Math.ceil(millisecsDiff/1000/60/60/24);

	var splitted = dateString.split('/');
	var tmonth = splitted[0];
	var tday  = splitted[1];
	var tyear = splitted[2];

	var prettyDate = '{0} Days ({1} {2})'.format(days, tmonth, tday);

	return  days > 30 && prettyDate ||
			days > 1 && "In {0} Days".format(days) ||
		   	days == 1 && "Tomorrow" ||
		   	days == 0 && "Out Today";
}

// string format
// "I {0} you {1}".format('like', 'very much');
// "http://google.com/?q={0}&params1&params2".format('test');
String.prototype.format = function() {
    var s = this,
        i = arguments.length;

    while (i--) {
        s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
    }
    return s;
};

String.prototype.f = String.prototype.format;


String.prototype.stripTags = function() {
	return this.replace(/(<([^>]+)>)/ig, '');
}


String.prototype.trim=function()
	{return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');};

String.prototype.ltrim=function()
	{return this.replace(/^\s+/,'');}

String.prototype.rtrim=function()
	{return this.replace(/\s+$/,'');}

String.prototype.fulltrim=function()
	{return this.replace(/(?:(?:^|\n)\s+|\s+(?:$|\n))/g,'').replace(/\s+/g,' ');}




Array.prototype.findHighestNumber = function(inField)
{
	var tmp = [];

	for (var i = 0; i < this.length; i++) {
		tmp[i] = Number(this[i][inField]);
	}

	if(this.length < 1)
		return 0;

	// (c) john resig: http://ejohn.org/blog/fast-javascript-maxmin/
	return Math.max.apply(Math, tmp);
}

Array.prototype.getObjectBy = function(field, withValue)
{
	for (var i = 0; i < this.length; i++) {
		if(this[i][field] == withValue)
			return this[i];
	}

	return null;
}

Array.prototype.getAllObjectsBy = function(field, withValue)
{
	var results = [];

	for (var i = 0; i < this.length; i++) {
		if(this[i][field] == withValue)
			results.push(this[i]);
	}

	return (results.length>0) ? results : null;
}

Array.prototype.remove = function(key)
{
    for(var i = 0; i < this.length; ++i)
    {
        if(this[i] == key)
        {
            this.splice(i, 1);
            return;
        }
    }
}

Array.prototype.addIfUnique = function(key, value)
{
	if(this.contains(key)) // this.includes might not require contains from below
		this[key] = value;
	else
	{
		this.push(key);
		this[key] = value;
	}
}

Array.prototype.contains = function(obj)
{
	var i = this.length;

	while (i--)
	{
		if (this[i] === obj)
		{
			return true;
		}
	}

	return false;
}

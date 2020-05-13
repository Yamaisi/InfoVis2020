class Vec3
{
	constructor( x, y, z )
	{
		this.x = x;
		this.y = y;
		this.z = z;
	}

	add( v )
	{
		this.x += v.x;
		this.y += v.y;
		this.z += v.z;
	}

	sum()
	{
		return this.x + this.y +this.z;
	}

	min(v)
	{
		return Math.min(v)
	}

	max(v)
	{
		return Math.max(v)
	}

	mid(v)
	{
		return Math.median(v)
	}

}

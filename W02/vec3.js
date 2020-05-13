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

	min()
	{
		return Math.min(this.x,this.y,this.z);
	}

	max()
	{
		return Math.max(this.x,this.y,this.z);
	}

	mid()
	{
		return Math.median(this.x,this.y,this.z);
	}

}

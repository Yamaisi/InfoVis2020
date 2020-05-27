function main()
{
    var width = 500;
    var height = 500;

    var scene = new THREE.Scene();

    var fov = 45;
    var aspect = width / height;
    var near = 1;
    var far = 1000;
    var camera = new THREE.PerspectiveCamera( fov, aspect, near, far );
    camera.position.set( 0, 0, 5 );
    scene.add( camera );

    var light = new THREE.PointLight();
    light.position.set( 5, 5, 5 );
    scene.add( light );

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( width, height );
    document.body.appendChild( renderer.domElement );

	var faces = [
        [ 0, 1, 2 ] // f0
    ];

	
    var vertices = [
        [ -1,  1, 0 ], // v0
        [ -1, -1, 0 ], // v1
        [  1, -1, 0 ]  // v2
    ];

    var v0 = new THREE.Vector3().fromArray( vertices[0] );
    var v1 = new THREE.Vector3().fromArray( vertices[1] );
    var v2 = new THREE.Vector3().fromArray( vertices[2] );
    var id = faces[0];
    var f0 = new THREE.Face3( id[0], id[1], id[2] );

    var geometry = new THREE.Geometry();
    geometry.vertices.push( v0 );
    geometry.vertices.push( v1 );
    geometry.vertices.push( v2 );
    geometry.faces.push( f0 );

    //    var material = new THREE.MeshBasicMaterial();
    var material = new THREE.MeshLambertMaterial();
    material.vertexColors = THREE.FaceColors;
    geometry.faces[0].color = new THREE.Color( 1, 0, 0 );

    geometry.computeFaceNormals();
    material.side = THREE.DoubleSide;

    var triangle = new THREE.Mesh( geometry, material );
    scene.add( triangle );
    
    
    
    var vertices2 = [
        [ -1,  1, 0 ], // v0
        [  1,  1, 0 ], // v1
        [  1, -1, 0 ]  // v2
    ];

    var vb0 = new THREE.Vector3().fromArray( vertices2[0] );
    var vb1 = new THREE.Vector3().fromArray( vertices2[1] );
    var vb2 = new THREE.Vector3().fromArray( vertices2[2] );
    var ibd = faces[0];
    var fb0 = new THREE.Face3( ibd[0], ibd[1], ibd[2] );

    var geometry2 = new THREE.Geometry();
    geometry2.vertices.push( vb0 );
    geometry2.vertices.push( vb1 );
    geometry2.vertices.push( vb2 );
    geometry2.faces.push( fb0 );

    //    var material = new THREE.MeshBasicMaterial();
    var material2 = new THREE.MeshLambertMaterial();
    material2.vertexColors = THREE.FaceColors;
    geometry2.faces[0].color = new THREE.Color( 1, 0, 0 );

    geometry2.computeFaceNormals();
    material2.side = THREE.DoubleSide;

    var triangle2 = new THREE.Mesh( geometry2, material2 );
    scene.add( triangle2 );
    
    

    loop();

    function loop()
    {
        requestAnimationFrame( loop );
        triangle.rotation.x += 0.001;
        triangle.rotation.y += 0.001;
        triangle2.rotation.x += 0.001;
        triangle2.rotation.y += 0.001;
        renderer.render( scene, camera );
    }
}

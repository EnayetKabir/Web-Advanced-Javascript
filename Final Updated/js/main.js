			var camera, scene, renderer,
			particle1, particle2, particle2,
			light1, light2, light3,
			loader, mesh;	

			var mouseX = 0;
			var mouseY = 0;
			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;
			
			//stats
			var container, stats;

			init();
			animate();

			function init() {

				var container = document.getElementById( 'container' );

				camera = new THREE.PerspectiveCamera( 60, window.innerWidth / window.innerHeight, 1, 1000 );
				camera.position.set( 0, - 6, 500 );

				scene = new THREE.Scene();

				//Lights
				var ambient = new THREE.AmbientLight(0x666666);
				scene.add(ambient);
 
				var directionalLight = new THREE.DirectionalLight(0xffeedd);
				directionalLight.position.set(0, 70, 100).normalize();
				scene.add(directionalLight);

				loader = new THREE.JSONLoader();
				loader.load( 'EnayetLuckyCat.js', function ( geometry ) {

					geometry.computeVertexNormals();

					mesh = new THREE.Mesh( geometry, new THREE.MeshBasicMaterial( { envMap: THREE.ImageUtils.loadTexture( 'gold4.jpg', THREE.SphericalReflectionMapping ), overdraw: 0.9 } ) );
					mesh.position.set(0, -80, 0);
					mesh.scale.set(40, 40, 40);
					scene.add( mesh );
				} );

				renderer = new THREE.CanvasRenderer();
				renderer.setPixelRatio( window.devicePixelRatio );
				renderer.setSize( window.innerWidth, window.innerHeight );
				container.appendChild( renderer.domElement );
				
				//Stats Box - Uncomment to see Frame Rate and Performance
				// stats = new Stats();
				// stats.domElement.style.position = 'absolute';
				// stats.domElement.style.top = '0px';
				// container.appendChild( stats.domElement );

				document.addEventListener( 'mousemove', onDocumentMouseMove, false );

				window.addEventListener( 'resize', onWindowResize, false );

			}

			//window resize function
			function onWindowResize() {

				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;

				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();

				renderer.setSize( window.innerWidth, window.innerHeight );

			}

			//mouse move function
			function onDocumentMouseMove( event ) {

				mouseX = ( event.clientX - windowHalfX );
				mouseY = ( event.clientY - windowHalfY ) * 0.2;

			}

			//animate function
			function animate() {

				requestAnimationFrame( animate );

				render();
				stats.update();
			}

			//render function
			function render() {

				camera.position.x += ( mouseX - camera.position.x ) * 0.09;
				camera.position.y += ( - mouseY - camera.position.y ) * 0.09;
				camera.lookAt( scene.position );

				renderer.render( scene, camera );

			}
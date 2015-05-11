			var SCREEN_WIDTH = window.innerWidth;
			var SCREEN_HEIGHT = window.innerHeight;
 
			var container;
 
			var camera, scene;
			var canvasRenderer, webglRenderer;
 
			var mesh, zmesh, geometry;
 
			var windowHalfX = window.innerWidth / 2;
			var windowHalfY = window.innerHeight / 2;
 
			var meshes = [];
 
			init();
			animate();
 
			function init() {
 
				container = document.createElement('div');
				document.body.appendChild(container);
 
				camera = new THREE.PerspectiveCamera(75, SCREEN_WIDTH / SCREEN_HEIGHT, 1, 100000);
				camera.position.x = 400;
				camera.position.y = 200;
				camera.position.z = 400;
 
				scene = new THREE.Scene();
 
				// LIGHTS
				var ambient = new THREE.AmbientLight(0x666666);
				scene.add(ambient);
 
				var directionalLight = new THREE.DirectionalLight(0xffeedd);
				directionalLight.position.set(0, 70, 100).normalize();
				scene.add(directionalLight);
 
				// RENDERER
				webglRenderer = new THREE.WebGLRenderer();
				webglRenderer.setSize(SCREEN_WIDTH, SCREEN_HEIGHT);
				webglRenderer.domElement.style.position = "relative";
 
				container.appendChild(webglRenderer.domElement);
 
				var loader = new THREE.JSONLoader(),
				callbackKey = function(geometry) {createScene(geometry,  0, -50	, 0, 100, "js/goldtexture.jpg")};
				loader.load("js/EnayetLuckyCat.js", callbackKey);
 
				window.addEventListener('resize', onWindowResize, false);
 
			}
 
			function createScene(geometry, x, y, z, scale, tmap) {
				zmesh = new THREE.Mesh(geometry, new THREE.MeshLambertMaterial({map: THREE.ImageUtils.loadTexture(tmap)}));
				zmesh.position.set(x, y, z);
				zmesh.scale.set(scale, scale, scale);
				meshes.push(zmesh);
				scene.add(zmesh);
			}
 
			function onWindowResize() {
 
				windowHalfX = window.innerWidth / 2;
				windowHalfY = window.innerHeight / 2;
 
				camera.aspect = window.innerWidth / window.innerHeight;
				camera.updateProjectionMatrix();
 
				webglRenderer.setSize(window.innerWidth, window.innerHeight);
			}
 
			function animate() {
				for(var i = 0; i < meshes.length; i++){
					meshes[i].rotation.y += .01;
				}
				requestAnimationFrame(animate);
				render();
			}
 
			function render() {
				camera.lookAt(scene.position);
				webglRenderer.render(scene, camera);
			}
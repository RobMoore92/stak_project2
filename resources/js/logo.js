 var container = document.getElementById('logo');
      // Set up our animation 

      var animData = {
          container: container,
          renderer: 'svg',
          autoplay: true,
          loop: true,
          path : 'data.json'
      };
      var anim = bodymovin.loadAnimation(animData);
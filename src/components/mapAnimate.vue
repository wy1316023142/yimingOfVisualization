<template>
	<div class="flip-container">
		 <div class="flipper">
			 <div class="front">
				<img src="/static/img/32.png" alt="">
			</div>
			<div class="back">
				<img src="/static/img/33.png" alt="">
			</div>
		</div>
	</div>
</template>

<script>
</script>

 <style scoped="scoped">
        /* entire container, keeps perspective */
        .flip-container {
            -webkit-perspective: 2000; 
            -moz-perspective: 2000;
						position: relative;
						top: 30px;
        }
        /* flip the pane when hovered */
        .flip-container .front:hover {
            transform:scale(1,-1) rotateX(180deg);
            -moz-transform:scale(1,-1) rotateX(180deg);     /* Firefox */
				}
				.flip-container .back:hover {
				    transform:scale(1,-1) rotateX(180deg);
				    -moz-transform:scale(1,-1) rotateX(180deg);     /* Firefox */
						top: 250px;
				}
				.flip-container .front:hover +.back{
					top:250px;
				}
				.flip-container .back:hover +.front{
					top:250px;
					background: #fff;
				}
        .flip-container, .front, .back {
            width: 100%;
        }

        /* flip speed goes here */
        .flipper {
            transition: 0.6s;
            transform-style: preserve-3d;
            -moz-transform-style: preserve-3d;
            position: relative;
        }

        /* hide back of pane during swap */
        .front, .back {
            color:#ffffff;
            text-align: center;
            font-size: 24px;
						transition: 0.6s;
            position: absolute;
            top: 0;
            left: 0;
        }
				.back{
					transform:scale(1,-1) rotateX(110deg);
					-moz-transform:scale(1,-1) rotateX(110deg);     /* Firefox */
					top: 80px;
				}
        /* front pane, placed above back */
        .front {
						transform:scale(1,-1) rotateX(110deg);
						-moz-transform:scale(1,-1) rotateX(110deg);     /* Firefox */
        }
    </style>
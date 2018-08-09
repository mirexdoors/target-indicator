<!DOCTYPE html>

<html>
<head>
	<meta charset="UTF-8">
	<meta name="viewport"
	content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<link rel="stylesheet" href="src/style.css">
	<title>Targer Indicator</title>
</head>
<body>
	<div class="wrapper">
	<h1>Target Indicator</h1>
	
	 <div class="container">
                <div class="container__title">
                    Target Indicator Demo
                </div>
                <div class="container__block">
                    <div class="container__body">
                        <div class="container__roller">
                            <span class="container__control__text">Reached: </span>
                            <div class="progressBar">
                                <div class="progressBar__fill" id="bar">
                                    <div class="progressBar__arrow">
                                       $ <span class="progressBar__target" id="counter">0</span>
                                    </div>
                                </div>
                            </div>
                            <div class="container__plate">
                                Target
                                <hr>
                                <p class="targetSumm" >$<span id="target">15</span></p>
                            </div>
                        </div>
                        <div class="container__notify">You need <span class="container_icon">i</span> more to reach your target.</div>
                    </div>
                </div>
            </div>
        </div>
	<script src="/src/script.js?<?=rand()?>"></script>
</body>
</html>
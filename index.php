<?php
 	include("Mobile_Detect.php"); 
	$detect = new Mobile_Detect;
	if ( $detect->isMobile() ) { 
    	$mobile=1;
    	include("mobile/index.html");	
	}else{
		include("desktop.html");
	}
?>

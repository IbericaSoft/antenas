<?
	define("HOST",$_SERVER['SERVER_NAME']);
	
	if (HOST=='sat-reparacionantenasmadrid.es'||HOST=='www.sat-reparacionantenasmadrid.es'){
		$env 		= 'produccion.cfg.php';
		$osPath 	= '/backoffice';
		$publicPath = '/frontoffice';
		$mode 		= 'production';
	}else if (HOST=='local.sat-reparacionantenasmadrid.es' || HOST==''){
		$env 		= 'desarrollo.cfg.php';
		$osPath 	= '/backoffice';
		$publicPath = '/frontoffice';
		$mode 		= 'development';			
	}
	
	define("OS_MODE",$mode);
	define("ENVIRONMENT_FILE",$env);
	define("OS_WEB_PATH", $osPath);
	define("PUBLIC_WEB_PATH", $publicPath);
	define("PREFIX_URL", "$osPath/desktop");
	define("OS_ROOT", $_SERVER['DOCUMENT_ROOT'].$osPath );
?>
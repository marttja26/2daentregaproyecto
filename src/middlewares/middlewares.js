const Admin = true;

const noEsAdmin = (ruta, metodo) => {
	const error = {
		error: -1,
	};

	if (ruta && metodo) {
		error.description = `ruta '${ruta}' metodo '${metodo}' no autorizado`;
	} else {
		error.description = 'no autorizado';
	}
	return error;
};

export const onlyAdm = (req, res, next) => {
	if (!Admin) {
		res.json(noEsAdmin(req.baseUrl, req.method));
	} else {
		next();
	}
};

export const urlCheck = (req, res, next) => {
	if (req.url.includes('/api/carrito') || req.url.includes('/api/productos'))
		next();
	else
		res.json({
			error: -2,
			description: `ruta ${req.originalUrl} metodo ${req.method} no implementada`,
		});
};

export default {
	mongodb: {
		cnxStr:
			'mongodb+srv://backend:asdf1234@cluster0.vggo13i.mongodb.net/?retryWrites=true&w=majority',
		options: {
			useNewUrlParser: true,
			useUnifiedTopology: true,
			useCreateIndex: true,
			serverSelectionTimeoutMS: 5000,
		},
	},
	firebase: {
		type: 'service_account',
		project_id: 'backend-ecco',
		private_key_id: 'd8bafc33c560094ccb6ce25536d26ca770ffc774',
		private_key:
			'-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDRUo7kNZlqtGfL\nJcB3mvyT972SiRiWum2PLrg9n0IOwzxU4mwJdf8UdYtdhGTJ1WFemhP/KTAiplAo\ngulK803ECmjZCb+o4G3TqMMr+A/CSbCyYERZd01AvQvtjvTab6X1Klsva2pTkop6\nCdAb9lkwim4bb0XUF8zLqtOenoq/al1n1AVsVwqiZt9jl8O6YrqAHOT/bSNS/yeT\n2TUjKvcbek3omOxQ34HJ+lc8/EO+wOL3GSEMU4lx5Lm92ckZ5dIBJ7lcKEVWPQmc\nvUSZd9+iWUQoCms7BNUk5gbRGX6aSlIT578fwHz3PBt0mK41xnJawR1VZOa0pOs+\nNCGjnZBfAgMBAAECggEAKn0+ohY7MQyzsOnV2rFsKcD1CySnCBmJmbHbFi8YopSA\nz54yXe1EvOtrQa1ZJBsbK6/M9VNwAOiPhtmj72HZ3DxcsgmnjOkZgghUrb0pvb9l\njZ+64Ao2dTiqjishiqF1J4HUhpigOZyaXVFWnAZybkb7OLhqjTXTjVf8osr90QKx\nCqhgX7X/61ZtK3PWOVZNoJr7OY5hrqXhE6kHmCNYa/I44IBy9BGnR8vD5i94UlBv\nzGBhME7fBaPMhd4irVC9LLNcUL0Y3Dk+h/O5LCfkirUU5NaleyJo81JWVk5ls9DC\naIXjzjeOjjNnaiOZhqD4KGh8E+AJJFVRKYwjrAH+CQKBgQD3N8/JEWAWOC5KHShn\na+b6Qacrg69Xx/rknTzMvHbFcmMJblSmDgZ1x3sMy9NEmJevsSzkI90HQvswtxgr\nhxus6P341vovBNz036jAdx9NsEj26xrzXWjm9UqnezCEMUNbC3gCD4NeYdcEX2vs\nE2FhrXQLOv7XxJofXo2+51g7mwKBgQDYwiBjiLMvbdn4jl49ZdDi2JdAHyrJioZV\n6Hb5SMzajrvX/IpyoJeD3uBJCcaEOVUX2rZYLriHD7PIxKkWpYZqpvX8Z6vfSzIw\ndxD9/PQ9JVsIcWwL2sNb+hWdjr332MRWtSTHFl7bsmVi355+2oxYhqWt0R29afZA\n9JTUxW/0jQKBgQCLRtw/URSrL/eUNZ0ftwCoGPjPYR8V+0p0JcmtJrhbQLhfBdOW\nwewNytaePO7HhJhgmRbLaRELGEdgCKcLTtDet1zuJl9Iwhqhsqfl1rbCFADna0kB\ntqx1AdiPRq3sq7xgvLNdpdPDBqgWhJPOqpSAbTIlaZVNhiu2ZJTC6p8g5QKBgQCh\nggQgJftdm7yON4aAuRyr6jbI0HBRO6Zc3JnJpTT+pNvSU5nVT1OWLrtvsJj6bL26\nyHyVuDpGaKzNK7vR5AQD8+PV7mliN+Vtt0ox9gkGho8N+3VGX/qwzebNP07NHfct\npEuDDGghywtAYN74Jl/slmdc3DQMrqeOPq+m2nZRAQKBgAOsvZBi49TREoKXEbtA\nrr4UBCMoh52mME6Uu68hZX5DcpyKsQUmTboU9Le8MiJMEKxLz6s7EB7c3NZ2P2X5\nodV+W45oiQsgYm1i/FEXCXhbARzPy+/3G+3vzifJ18UTJqPd6q2wSw0HDI1Xa2/G\n7CJD+fZPTvKo9xPp+BdGy6LL\n-----END PRIVATE KEY-----\n',
		client_email:
			'firebase-adminsdk-wwpbp@backend-ecco.iam.gserviceaccount.com',
		client_id: '112267861610248818238',
		auth_uri: 'https://accounts.google.com/o/oauth2/auth',
		token_uri: 'https://oauth2.googleapis.com/token',
		auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
		client_x509_cert_url:
			'https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-wwpbp%40backend-ecco.iam.gserviceaccount.com',
	},
};

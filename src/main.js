import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		saludo: 'Hola, mi nombre es Ramiro'
	}
});

export default app;
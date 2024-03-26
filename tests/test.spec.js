import { expect, test } from '@playwright/test';

test('Test submitting the form with empty fields', async ({ page }) => {
	// Navegar para a página
	await page.goto('http://localhost:4173/');

	// Verificar se o botão 'Iniciar Desafio' está presente na tela
	const layoutDiv = await page.waitForSelector('.info_container')
	const startChallengeButton = await layoutDiv.waitForSelector('[data-btn="init"]');
	expect(startChallengeButton).toBeTruthy();

	// Verificar o texto dentro do botão 'Iniciar Desafio'
	const buttonText = await startChallengeButton.textContent();
	expect(buttonText).toContain('Iniciar Desafio');

	// Clicar no botão 'Iniciar Desafio'
	await startChallengeButton.click();

	// Esperar que o formulário seja exibido
	await layoutDiv.waitForSelector('[data-form="sub"]');

	// Esperar 15 segundos (tempo regressivo)
	await page.waitForTimeout(15000);

	// Verificar se a página foi atualizada após 15 segundos
	const currentUrl = page.url();
	if (currentUrl === 'http://localhost:5173/') {
		console.log('Desafio finalizado com fracasso!'); // Exibir modal com a frase "Desafio finalizado com fracasso!"
	} else {
		console.log('Desafio finalizado com sucesso!'); // Exibir modal com a frase "Desafio finalizado com sucesso!"
	}
});

test('Test sending the form with filled fields', async ({ page }) => {
	// Navegar para a página
	await page.goto('http://localhost:4173/');

	// Verificar se o botão 'Iniciar Desafio' está presente na tela
	const layoutDiv = await page.waitForSelector('.info_container')
	const startChallengeButton = await layoutDiv.waitForSelector('button');
	expect(startChallengeButton).toBeTruthy();

	// Verificar o texto dentro do botão 'Iniciar Desafio'
	const buttonText = await startChallengeButton.textContent();
	expect(buttonText).toContain('Iniciar Desafio');

	// Clicar no botão 'Iniciar Desafio'
	await startChallengeButton.click();

	// Esperar que o formulário seja exibido
	await page.waitForSelector('form');

	// Preencher os campos do formulário
	await page.fill('[data-input="name"]', 'John Doe');
	await page.fill('[data-input="tel"]', '123456789');
	await page.fill('[data-input="email"]', 'john@example.com');

	// Clicar no botão 'Enviar'
	const sendButton = await page.waitForSelector('[data-btn="send"]');
	expect(sendButton).toBeTruthy();

	await sendButton.click();

	// Verificar se estamos na próxima página

	await page.waitForURL('http://localhost:4173/candidate');
});


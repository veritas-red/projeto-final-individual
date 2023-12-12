// Array de usuários (apenas para fins de exemplo - armazene de forma segura em um servidor real)
const users = [
    { username: 'user1', password: 'senha1' },
    { username: 'user2', password: 'senha2' }
];

// Função para realizar o login
function login() {
    const usernameInput = document.getElementById('username').value;
    const passwordInput = document.getElementById('password').value;

    // Verificar se as credenciais estão corretas
    const user = users.find(u => u.username === usernameInput && u.password === passwordInput);

    if (user) {
        // Armazenar informações de login em um cookie (ou use sessionStorage)
        document.cookie = `username=${user.username}; path=/`;

        // Redirecionar para a página do painel
        window.location.href = 'index.html';
    } else {
        alert('Falha no login. Por favor, verifique seu usuário e senha.');
    }
}

// Função para verificar se o usuário está autenticado ao acessar o dashboard
function checkAuth() {
    const username = getCookie('username');

    if (!username) {
        // Redirecionar para a página de login se não houver cookie
        window.location.href = 'entrar.html';
    }
}

// Função para obter o valor de um cookie pelo nome
function getCookie(name) {
    const cookies = document.cookie.split(';').map(cookie => cookie.trim());
    const cookie = cookies.find(c => c.startsWith(`${name}=`));

    return cookie ? cookie.split('=')[1] : null;
}
function logout() {
    // Excluir o cookie
    document.cookie = 'username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';

    // Redirecionar para a página de login
    window.location.href = 'entrar.html';
}
// Verificar autenticação ao carregar a página do dashboard
checkAuth();
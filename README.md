
# AcheFácilJP
> Uma plataforma com multiplas API's para consultas porcessuais e enriquecimento de cadastros. 

## Informações Técnicas

- [Laravel 8](https://laravel.com/) com [Mix](https://laravel.com/docs/8.x/mix)
- [Cuba Dashboard](http://preview.themeforest.net/item/cuba-bootstrap-responsive-admin-dashboard-template/full_screen_preview/27530933?_ga=2.181784803.577053218.1600468722-1355300982.1593182370)
- [Wireframe](https://xd.adobe.com/view/a3b11a02-f8c7-41bf-8abd-e6a78c412137-f6e2/?fullscreen)
- [Socialite](https://laravel.com/docs/7.x/socialite)
- [Bootstrap 4](https://getbootstrap.com/docs/4.0/getting-started/introduction/)
- [Font Awesome 6](https://fontawesome.com/)

## Instalação
> Clone o repositório e instale as dependências.

```html
git clone https://github.com/toniagne/achefaciljp.git
cd magnifier
composer install
```

> Crie seu arquivo de ambiente e insira as credenciais do banco de dados.

```html
cp .env.example .env
```

> Execute as migrações.
```html
php artisan migrate
```

> Instale as dependências do mix.

```html
yarn install
```

> Inicie o servidor.
 ```js 
php artisan serve // http://localhost:8000/
yarn run watch // Para compilar os assets
```

## Desenvolvedores

- [Toni Agne](https://gitlab.com/toniagne)
- [Vinicius Luiz](https://gitlab.com/viniciusluiz)
- [Wallace Erick](https://gitlab.com/wallaceerick)

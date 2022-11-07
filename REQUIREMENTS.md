# API Requirements

The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application.

## API Endpoints

#### Products

- Index: `'/products'` [GET]
- Show specific products by id (args: user id): `'/products/:id'` [GET]
- Create [token required] (args: product name, price, category): `'/products'` [POST] (Token)
- Delete [token required] (args: product id): `'/product/delete/:productId'` [delete] (token)
- [OPTIONAL] Products by category (args: category): `'/products/category/:category'` [GET]
<!-- - [OPTIONAL] Top 5 most popular products: `'/popular-product'` [Get] -->

#### Users

- Index [token required]: `'/users'` [GET] (token)
- Show [token required] (args: user id): `'/users/:id'` [GET] (token)
- Create N[token required] (args: first name, last name, password): `'/users' `[POST]

#### Orders

- Get all orders [token required]: `/orders` [GET]
- Show specific order by id[token required]: `/orders/:id` [GET]
- Create order by user[token required]: `/orders` [POST]
- Edit order status [token required]: `/orders/:id/status/:status` [PUT]
- delete specific order by id[token required]: `/orders/:id` [delete]
- Orders by user (args: user id)[token required]:`/user-orders/:userId` [GET]
- Current Order by user (args: user id)[token required]: `/user-orders/:userId/current` [GET]
- Active Orders by user (args: user id)[token required]: `/user-orders/:userId/active` [GET]
- Completed Orders by user (args: user id)[token required]: `/user-orders/:userId/completed` [GET]

#### order_products

- add to order_products table: `\cart` [POST]

## Data Shapes

#### Product

- id
- name
- price
- [OPTIONAL] category

- TABLE: `products (id SERIAL PRIMARY KEY, name VARCHAR(150), price integer, category VARCHAR(100))`

#### User

- id
- firstName
- lastName
- password

- TABLE: `users (id SERIAL PRIMARY KEY, first_name VARCHAR(100), last_name VARCHAR(100), password text);`

#### Orders

publisher_id:string[foreign key to publishers table]

- id
- user_id
- status of order (active or complete)

- TABLE: `orders orders (id SERIAL PRIMARY KEY,user_id BIGINT REFERENCES users(id) ON DELETE CASCADE, status VARCHAR(50));`

### order_products

- id
- id of each product in the order
- id of order
- quantity of each product in the order

-TABLE: `order_products (id SERIAL PRIMARY KEY, order_id BIGINT REFERENCES orders(id) ON DELETE CASCADE, product_id BIGINT REFERENCES products(id) ON DELETE CASCADE, status integer);`

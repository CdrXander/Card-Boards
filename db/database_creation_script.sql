--  DELETE DATABASE     =   =   =   =   =   =   =
DROP TABLE IF EXISTS cb_order;
DROP TABLE IF EXISTS order_status;
DROP TABLE IF EXISTS sale;
DROP TABLE IF EXISTS product;

DROP SEQUENCE IF EXISTS cb_order_pk;
DROP SEQUENCE IF EXISTS order_status_pk;
DROP SEQUENCE IF EXISTS sale_pk;
DROP SEQUENCE IF EXISTS product_pk;

--  CREATE DATABASE =   =   =   =   =   =   =   =

-- Sequences
CREATE SEQUENCE public.product_pk
    INCREMENT BY 1
    START WITH 100
    MINVALUE 1
;

CREATE SEQUENCE public.sale_pk
    INCREMENT BY 1
    START WITH 100
    MINVALUE 1
;

CREATE SEQUENCE public.order_status_pk
    INCREMENT BY 1
    START WITH 100
    MINVALUE 1
;

CREATE SEQUENCE public.cb_order_pk
    INCREMENT BY 1
    START WITH 100
    MINVALUE 1
;

-- Tables
CREATE TABLE public.product
(
    id integer NOT NULL DEFAULT nextval('product_pk'),
    sku text,
    name text,
    description text,
    price integer,
    item_qty integer,
    discount integer,
    shipping integer,
    PRIMARY KEY(id)
);

CREATE TABLE public.sale
(
    id integer NOT NULL DEFAULT nextval('sale_pk'),
    sale_date TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT NOW(),
    paypal_transaction_id text,
    customer_name text,
    customer_email text,
    product_id integer,
    PRIMARY KEY (id),
    FOREIGN KEY (product_id) REFERENCES public.product(id)
);

CREATE TABLE public.order_status
(
    id integer NOT NULL DEFAULT nextval('order_status_pk'),
    name text,
    PRIMARY KEY (id)
);

CREATE TABLE public.cb_order
(
    id integer NOT NULL DEFAULT nextval('cb_order_pk'),
    sale_id integer,
    status_id integer,
    date_created TIMESTAMP WITH TIME ZONE,
    date_shipped TIMESTAMP WITH TIME ZONE,
    PRIMARY KEY (id),
    FOREIGN KEY (sale_id) REFERENCES public.sale(id),
    FOREIGN KEY (status_id) REFERENCES public.order_status(id)
);

-- INITIALIZATION DATA  =   =   =   =   =   =   =

INSERT INTO public.order_status VALUES (1,'OPEN');
INSERT INTO public.order_status VALUES (2,'SHIPPED');
INSERT INTO public.order_status VALUES (3,'CLOSED');
INSERT INTO public.order_status VALUES (4,'RE-OPENED');

-- TEST DATA    =   =   =   =   =   =   =   =   =

INSERT INTO public.product VALUES (1, 'CB001','Card Board','A single Card Board', 249,1,0,159);
INSERT INTO public.product VALUES (2, 'CB002','Family Pack','4 Card Boards', 996,1,0,259);
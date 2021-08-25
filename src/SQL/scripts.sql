-- DROP TABLE IF EXISTS public.products  CASCADE;
-- DROP TABLE IF EXISTS public.reviews ;

CREATE TABLE IF NOT EXISTS public.categories
(
    category_id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name character varying(30) NOT NULL
);


CREATE TABLE IF NOT EXISTS public.products
(
    product_id integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    name character varying(200) NOT NULL,
    image_url text NOT NULL,
    category_id integer NOT NULL,
    -- price numeric NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at date NOT NULL,

    CONSTRAINT foreign_key_category
        FOREIGN KEY(category_id)
            REFERENCES public.categories(category_id)
);






CREATE TABLE storage (
    id SERIAL PRIMARY KEY,
    value text
);

-- Indices -------------------------------------------------------

CREATE UNIQUE INDEX storage_pkey ON storage(id int4_ops);

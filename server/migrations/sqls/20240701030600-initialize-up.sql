-- Drop table statement (optional if you are creating it for the first time)
DROP TABLE IF EXISTS public."Companies";

-- Create table statement for "Companies"
CREATE TABLE IF NOT EXISTS public."Companies"
(
    id SERIAL PRIMARY KEY, -- Auto-incrementing primary key
    name VARCHAR(255) NOT NULL UNIQUE, -- Unique constraint on 'name'
    register VARCHAR(10) COLLATE pg_catalog."default", -- Example column
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);

-- Alter table to set ownership to 'ihzorig'
ALTER TABLE IF EXISTS public."Companies"
    OWNER TO ihzorig;
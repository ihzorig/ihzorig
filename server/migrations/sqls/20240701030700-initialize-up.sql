-- Drop table statement (optional if you are creating it for the first time)
DROP TABLE IF EXISTS public."Offices";

-- Create table statement for "Offices"
CREATE TABLE IF NOT EXISTS public."Offices"
(
    id SERIAL PRIMARY KEY, -- Auto-incrementing primary key
    companyName VARCHAR(255) NOT NULL,
    address VARCHAR(255) NOT NULL,
    createdAt timestamp with time zone NOT NULL,
    updatedAt timestamp with time zone NOT NULL,
    FOREIGN KEY (companyName) REFERENCES public."Companies" (name)
);

-- Alter table to set ownership to 'ihzorig'
ALTER TABLE IF EXISTS public."Offices"
    OWNER TO ihzorig;

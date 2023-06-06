# If you want to run
## delete migrations
delete current migration files inside `src/typeorm` directory.

## Create a new project
```terminal
docker-compose up --build
```

## Generate migration 
```terminal
docker exec -it typeorm-nest bash
npm run migration:generate
```

## Create tables
```terminal
docker exec -it typeorm-nest bash
npm run migration:up
```

## Check current sequence
Where you can run this query.
```sql
SELECT seq.relname AS sequence_name
FROM pg_class AS seq
INNER JOIN pg_depend dep ON seq.oid = dep.objid
INNER JOIN pg_class AS rel ON dep.refobjid = rel.oid
INNER JOIN pg_attribute att ON att.attnum = dep.refobjsubid AND att.attrelid = dep.refobjid
INNER JOIN pg_namespace nsp ON nsp.oid = seq.relnamespace
WHERE nsp.nspname = 'public' 
  AND rel.relname = 'too_long_table_name_sample_case_sample_case_sample_case_sa'
  AND att.attname = 'id'; 
```
The Query returns `too_long_table_name_sample_case_sample_case_sample_case__id_seq`. 

## Generate migration file without any file change
```terminal
docker exec -it typeorm-nest bash
npm run migration:generate
```
You can see new migration file.
Because typeorm expects its sequence should be `too_long_table_name_sample_ca_id_seq`.


# If you don't want to run
You can check what kind of migration files will be generated when you follow above steps inside `src/typeorm` directory.


### Exercise:

You are assigned a task to build a service whose job will be to process employee data with the following columns: `id`, `name`, and `salary` and **increases the salary of all employees by 10%**, and generates a **NDJSON** file with the updated salary information.

Your job is to walk us through the approach for building this service and implement it.

### Constraints:

- Assume the input CSV file is 50GB in size.

- Assume that the file is available on local filesystem and the updated information also needs to be stored on the local filesystem.

- You're allowed to install any npm package required to solve this challenge

### Example:

#### Input CSV (employees.csv):

```csv
id,name,salary
1,John Doe,50000
2,Jane Smith,45000
```

#### Expected Output (updated_employees.ndjson):

```json
{"id": 1, "name": "John Doe", "salary": "55000.00"}
{"id": 2, "name": "Jane Smith", "salary": "49500.00"}
```

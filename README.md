Instructions:

inside the server folder, make a virtual envioronment

```python -m venv env```

```source env/bin/activate```
```pip install -r requirements.txt```

install grapiql to debug and query easily

```yarn install```

create tables
```python manage.py migrate```

populate the database
```python manage.py shell < load_data.py```

run the server
```python manage.py runserver```

and go to localhost:8000/graphql

here is some example query:

```
query {
  allUsers {
    edges {
      node {
        id,
        nickname
      }
    }
  }
}
```


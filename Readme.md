# Contract Testing

This is a sample project for how to perform contract validation testing for APIs.

## How to Use

Currently this is a POC, but more work will be done to build reports and assertions in the near future. To use this example, you need to have installed both [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/install/).

To poke this:
```bash
docker-compose up
```

From here you can call up the service under test and read validation info from the response headers:
```bash
curl --verbose http://locahost:8080/hello/world
```

## Next Steps
* Write the response headers to report files
* Parse the individual response reports, aggregate results
* Generate an overal test report in JSON and HTML

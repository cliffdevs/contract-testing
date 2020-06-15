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

You can see the response coming back from curl with some extra openapi-cop headers. These are actually intercepted by a test proxy `response-reporter` that outputs the data in JSON files that will later be aggregated by a coverage reporter.

## Next Steps
* Parse the individual response reports, aggregate results
* Generate an overal test report in JSON and HTML

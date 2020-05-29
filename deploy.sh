docker build -t olavokruel/multi-client:latest -t olavokruel/multi-client:$SHA -f ./client/Dockerfile ./client
docker build -t olavokruel/multi-server:latest -t olavokruel/multi-server:$SHA -f ./server/Dockerfile ./server
docker build -t olavokruel/multi-worker:latest -t olavokruel/multi-worker:$SHA -f ./worker/Dockerfile ./worker

docker push olavokruel/multi-client:latest
docker push olavokruel/multi-server:latest
docker push olavokruel/multi-worker:latest

docker push olavokruel/multi-client:$SHA
docker push olavokruel/multi-server:$SHA
docker push olavokruel/multi-worker:$SHA

kubectl apply -f k8s

kubectl set image deployments/server-deployment server=olavokruel/multi-server:$SHA
kubectl set image deployments/client-deployment client=olavokruel/multi-client:$SHA
kubectl set image deployments/worker-deployment worker=olavokruel/multi-worker:$SHA
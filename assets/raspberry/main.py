import requests

server_addres = "10.244.105.167"
port = 8000

url = f"http://{server_addres}:{port}/data/send_data.php"

data = {
    'nouvelle_tension':5,
    'nouvelle_intensite':15,
    'nouvelle_chaleur':65,
    'nouvelle_consommation':34
}

try:
    
    reponse = requests.post(url, data=data)
    
    if reponse.status_code == 200:
        print('donnees envoyer avec succes')
    else:
        print('la requette a echoue avec pour status : ', reponse.status_code)
    
except requests.RequestException as e:
    print('requette refuse : ', e)
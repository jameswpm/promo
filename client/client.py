import requests
import sys

resp = requests.get('http://localhost:3000/codes/' + sys.argv[1])

if resp.status_code != 200:
    # Erro no server
    raise ApiError('GET /codes/ {}'.format(resp.status_code))
for elem in resp.json():
    print('Cod.Loja:{}, Num.PDV:{}, Cupom Fiscal:{}, qtd.NumSorte: {}').format(elem['Cod.Loja'], elem['Num.PDV'], elem['Cupom.Fiscal'], elem['qtd.NumSorte'])
    print('Seguem seus numeros da sorte')
    print (elem['luck'])

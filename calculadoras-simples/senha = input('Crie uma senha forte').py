import re

senha = input('Crie uma senha forte')

while senha.__len__() < 8:
    print('Senha fraca, precisa de 8 dígitos ou mais')
    senha = input('Crie uma senha forte')

    while senh

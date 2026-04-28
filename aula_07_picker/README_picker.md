# README — Aula do Componente Picker

Este projeto foi desenvolvido como atividade prática da aula sobre o **componente Picker** em **React Native**.

## Objetivo da aula

## Imagem da atividade

![Tela da atividade com Switch](src/img/image.png)

O objetivo desta atividade é compreender o uso do componente `Picker`, utilizado para permitir que o usuário selecione uma opção dentro de uma lista predefinida.

## Conteúdos trabalhados

- Uso do componente `Picker`
- Controle de estado da opção selecionada
- Atualização dinâmica da interface
- Exibição de mensagens conforme a escolha do usuário
- Organização visual com `View`, `Text`, `Image` e `StyleSheet`

## Observação importante

Diferente de alguns componentes nativos do React Native, o `Picker` precisa ser instalado separadamente no projeto.

## Instalação

Execute o comando abaixo dentro da pasta do projeto:

```bash
npm install @react-native-picker/picker
```

## Exemplo de uso

```jsx
import { Picker } from '@react-native-picker/picker';

<Picker
  selectedValue={linguagem}
  onValueChange={(itemValue) => setLinguagem(itemValue)}
>
  <Picker.Item label="Selecione" value="" />
  <Picker.Item label="Java" value="Java" />
  <Picker.Item label="JavaScript" value="JavaScript" />
</Picker>
```

## Comportamento esperado da atividade

O aplicativo deve permitir que o usuário escolha uma linguagem de programação no `Picker`.  
Após a seleção, a tela deve exibir uma mensagem informando qual linguagem foi escolhida.  
Caso nenhuma opção tenha sido selecionada, o app pode exibir uma mensagem como:

`NENHUMA LINGUAGEM SELECIONADA!!`

## Estrutura básica usada no app

- `View`
- `Text`
- `Image`
- `Picker`

## Fonte da atividade

A aula e o exercício foram baseados no conteúdo disponível em:

```text
https://sites.google.com/view/desenvolvimento-mobile-lfc/home/06-componentes_iu/picker
```

## Finalidade

Este material foi utilizado com finalidade acadêmica, para praticar o uso de componentes de interface no desenvolvimento mobile com React Native.

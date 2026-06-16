const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#m-nome')
const sFuncao = document.querySelector('#m-funcao')
const sSalario = document.querySelector('#m-salario')
const btnSalvar = document.querySelector('#btnSalvar')

let itens = []
let idActive 

const getItensBD = () => JSON.parse(localStorage.getItem('db_funcionarios')) ?? []
const setItensBD = () => localStorage.setItem('db_funcionarios', JSON.stringify(itens))

function openModal(edit = false, index = 0) {
  modal.classList.add('active')

  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }

  if (edit) {
    sNome.value = itens[index].nome
    sFuncao.value = itens[index].funcao
    sSalario.value = itens[index].salario
    idActive = index
  } else {
    sNome.value = ''
    sFuncao.value = ''
    sSalario.value = ''
    idActive = undefined
  }
}

function editItem(index) {
  openModal(true, index)
}

function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()
  loadItens()
}

// Cria a linha visual na tabela HTML
function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.funcao}</td>
    <td>R$ ${parseFloat(item.salario).toFixed(2)}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' style='color: #3939e2'></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash' style='color: red'></i></button>
    </td>
  `
  tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
  if (sNome.value == '' || sFuncao.value == '' || sSalario.value == '') {
    return
  }

  e.preventDefault();

  if (idActive !== undefined) {
    itens[idActive].nome = sNome.value
    itens[idActive].funcao = sFuncao.value
    itens[idActive].salario = sSalario.value
  } else {
    itens.push({'nome': sNome.value, 'funcao': sFuncao.value, 'salario': sSalario.value})
  }

  setItensBD() 
  modal.classList.remove('active')
  loadItens() 
}

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })
}

loadItens()
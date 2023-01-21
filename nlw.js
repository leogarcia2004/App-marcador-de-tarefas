 const form = document.querySelector('#form-habits')
 const nlwSetup = new NLWSetup(form)
 const button = document.querySelector('header button')

 button.addEventListener('click',add)
 form.addEventListener("change",save) // mudança de formuário

 function add(){

    const today = new Date().toLocaleDateString("pt-br").slice(0, -5) // cria a data com as marcações da coluna
   const dayExists = nlwSetup.dayExists(today) // vai verificar se a data today existe
   
if(dayExists){ // se for verdadeiro(se a data estiver adicionada) ele manda o alert, se não (else) ele adiciona a data que está na variável today
    alert("Dia já incluso")
   return // coloque o 'return' para o dado nao entrar dentro de 'nlwSetup.addDay(today), assim o dado irá parar de rodar no código quando chegar no return
}
   nlwSetup.addDay(today)
 }

 function save(){
     localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data)) //guardar dados no meu navegador
 }
/* const data = {
   run: ['01-01','01-02','01-06','01-07','01-08'],
   takePills: ['01-03'],
    jounal: ['01-02'],

 }
*/
const data = JSON.parse(localStorage.getItem("NLWSetup@habits"))
 nlwSetup.setData(data)
 nlwSetup.load() 


 /* // inicia o git (repositório) no seu projeto
git init 

// adiciona todos os arquivos modificados, ao stage
git add . 

// cria e descreve um ponto na história
git commit -m "message here" 

// envia alterações para o repositório remoto
git push */

 
function solve() {
 // деклариране колекция с доклади за бъгове, референции към DOM
 let currentId = 0;
 const reports = new Map();
 let selector = null;
 // фактори-функция, създаваща доклади за бъгове
 // 'Peter', 'I found this bug', true, 1

 function report(author, description, reproducible, severity) {
  const statusSpan = el('span', `${status} | ${severity}`, { className: 'status' })

  const element = el('div', [
   el('div', el('p', description), { className: 'body' }),
   el('div', [
    el('span', `Submitted by: ${author}`, { className: 'author' }),
    statusSpan
   ], { className: 'title' })
  ], {
   id: `report_${currentId}`,
   className: 'report'
  });
  reports.set(currentId, {
   ID: currentId,
   author,
   description,
   reproducible,
   severity,
   status: 'Open',
   element
  });
  currentId++;
 }

 // функции за манипулация на доклади
 function setStatus(id, newStatus) {
  reports.get(id).status = newStatus;
 }

 function remove(id) {
  reports.delete(id);
 }

 function sort(method) {
  // sort DOM elements
 }

 // функция, закачаща генерирания HTMl

 function output(newSelector) {
  selector = newSelector;
  // закачане
 }

 function el(type, content, attributes) {
  const result = document.createElement(type);

  if (attributes !== undefined) {
   Object.assign(result, attributes)
  }

  if (Array.isArray(content)) {
   content.forEach(append);
  } else {
   append(content)
  }

  function append(node) {
   if (typeof node === 'string') {
    node = document.createTextNode(node);
   }
   result.appendChild(node)
  }
  return result;
 }


 return {
  report,
  setStatus,
  remove,
  sort,
  output,
 }
}
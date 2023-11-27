const ajoute = (vlog) => ({type : 'ajoute', payload : vlog});
const update = (vlog) => ({type : 'update', payload : vlog});

export { ajoute, update };
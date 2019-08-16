const isValidUserName = name => {
    const regex = /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/;
    return regex.test(name);
};

export default { isValidUserName };

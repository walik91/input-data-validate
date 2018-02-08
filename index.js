module.exports = new class {
    check(dataTypes, dataList) {
    	this.result = {
    		success: true,
    		invalid: []
    	};

        Object.keys(dataTypes).forEach(field => {
        	Object.keys(dataTypes[field]).forEach(param => {
        		switch(param) {
        			case 'length':
        				this.checkLength(field, dataList[field], dataTypes[field][param]);
        				break;
        			default:

        				break;
        		}
        	});
        });

        return this.result;
    }

    checkLength(field, value, property) {
    	if (typeof property === 'integer' && value.length !== property) {
    		this.result.success = false;
    		this.result.invalid.push(field);

    		return false;
    	}

    	if (typeof property === 'object' && Array.isArray(property) && (value.length < property[0] || value.length > property[1])) {
			this.result.success = false;
			this.result.invalid.push(field);

			return false;
    	}

    	return true;
    }
}
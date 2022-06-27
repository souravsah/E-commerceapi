class AppError extends Error {
    constructor(message,statusCode){
        super(message);
        this.status=`${statusCode}`.startsWith('4')?'fail':'Error';
        this.statusCode=statusCode;
        this.isOperational = true;
        Error.captureStackTrace(this,this.constructor);
    }
}

module.exports=AppError;
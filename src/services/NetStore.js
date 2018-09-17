import fetch from 'dva/fetch'

function parseJSON(response) {
    return response.json()
}

/**
 * 统一封装的请求方法
 */
const NetStore = {
    /**
     * 主要的请求方法
     * @param {String} url 请求url
     * @param {Object} postData 请求体
     * @param {Object} headers 自定义请求头
     * @return {} Promise
     */
    LDFetch: (url, postData, headers) => {
        let Headers = {
            ...headers,
            "Content-Type": "application/json"
        }

        let options = {
            method: postData ? 'POST' : 'GET',
            headers: Headers,
            credentials: 'include'
        }
        if (postData) {
            options.body = JSON.stringify(postData)
        }

        return new Promise(function (resolve, reject) {
            console.log('-----------',options)
            fetch(url, options)
                .then(parseJSON)
                .then(
                    (data) => {
                        console.log('返回的数据-----', data)
                        if (data.error) {
                            console.log('错误：', data)
                        }
                        resolve(data)
                    }
                )
                .catch(
                    (err) => {
                        console.log('请求错误：', err)
                        reject(err)
                    }
                )
        })
    }
}

export {
    NetStore
}

export const secretKey = '1AGy4bCUoECDZ4yI6h8DxHDwgj84EqStMNyab8nPChQ=';
export const defaultSgy = 'jwt';

export const common = {
  baseUrl: process.env.FABU_BASE_URL || 'https://package.sit.ihomefnt.org', //baseUrl应用请求的url地址,比如https://package.ihomefnt.com
  uploadUrl: 'https://unify-file.sit.ihomefnt.org/unifyfile/file/uploadFile',
  secret: process.env.FABU_SECRET || 'secretsecret', //secret
  dbUser: process.env.FABU_DBUSER || 'aijia', //数据库用户 (没有开启mongodb用户认证的可以不填写)
  dbPwd: process.env.FABU_DBPWD || 'aijia1234567', //数据库密码 (没有开启mongodb用户认证的可以不填写)
  dbName: process.env.FABU_DB_NAME || 'admin', //数据库名称
  dbHost: process.env.FABU_DB_HOST || 'mongo-01.db.sit.ihomefnt.org', //数据库地址
  dbPort: 3717,
};

# サーバー設定

## GCE

### インスタンス

- ゾーン：us-west1-a
- マシンタイプ：e2-micro
- シリーズ：E2
- マインタイプ：e2-micro
- ブートディスク：CentOS 8
- ブートディスクの種類：標準の永続ディスク 30GB
- HTTP/HTTPSトラフィック：許可

### ssh認証鍵登録

VMインスタンス > インスタンス選択 > 編集 > SSH認証鍵

ローカルで作成した公開鍵をコピペする

```sh
cat ~/.ssh/my-ssh-key.pub
```

### DNS

[no-ip](https://www.noip.com/)で登録する

## CentOSに入ってからすること

### 基本

```sh
sudo yum upgrade
sudo yum update
sudo passwd
sudo visudo
sudo yum install git
```

```diff
- Defaults    secure_path = /sbin:/bin:/usr/sbin:/usr/bin
+ Defaults    secure_path = /sbin:/bin:/usr/sbin:/usr/bin:/usr/local/bin
```

```sh
sudo yum install nginx
sudo systemctl start nginx
sudo systemctl enable nginx
sudo firewall-cmd --list-all
sudo firewall-cmd --add-service=http --permanent
sudo firewall-cmd --add-service=https --permanent
sudo firewall-cmd --reload
sudo setsebool -P httpd_can_network_connect 1
```

### certbot

```sh
sudo dnf install epel-release
sudo dnf --enablerepo=epel install certbot python3-certbot-nginx
sudo certbot certonly -d alisonia.ddns.net --email alicetype.luna@gmail.com

```

### cron

```sh
sudo vi /etc/cron.d/letsencrypt
```

```crontab
MAILTO=alicetype.luna@gmail.com

# 毎週火曜 午前2時
0 2 * * 2 root certbot renew --post-hook "systemctl restart nginx"
```

### nginx.conf

```sh
sudo vi /etc/nginx/nginx.conf
# serverより下を削除
sudo vi /etc/nginx/conf.d/blog.conf
```

```conf:blog.conf
server {
        listen  443 ssl;
        server_name     alisonia.ddns.net;
        ssl_certificate /etc/letsencrypt/live/alisonia.ddns.net/fullchain.pem;
        ssl_certificate_key     /etc/letsencrypt/live/alisonia.ddns.net/privkey.pem;
        location / {
                proxy_pass      http://localhost:3000;
        }
}
```

## node

```sh
sudo yum install nodejs
sudo npm install -g n
sudo n stable
sudo yum remove nodejs
node --version
sudo npm install -g yarn
```

## app

```sh
pwd
# /home/tiechel
git clone https://github.com/tiechel/blog.git -b master
cd blog
yarn
yarn start
```

⇒　接続確認してみる。

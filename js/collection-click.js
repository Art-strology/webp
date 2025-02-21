
    document.addEventListener("DOMContentLoaded", function () {
        // 获取 URL 参数
        const urlParams = new URLSearchParams(window.location.search);
        const itemName = urlParams.get("item"); // 获取 object 名称

        if (itemName) {
            fetchItemData(itemName); // 调用 fetch 来加载数据
        }
    });

    // 远程加载 objects.json
    function fetchItemData(itemName) {
        fetch("js/objects.json") // 确保这是正确的路径
            .then(response => response.json()) // 解析 JSON 数据
            .then(data => {
                updateChronologicalPage(itemName, data.objects); // 传递正确的 objects 数组
            })
            .catch(error => console.error("Error loading JSON:", error));
    }

    // 更新页面内容
    function updateChronologicalPage(itemName, objects) {
        // 在 objects 里查找对应 item
        const selectedItem = objects.find(item => item.itemName === itemName);

        if (selectedItem) {
            // 更新页面内容
            document.getElementById("header").textContent = selectedItem.itemName;
            document.getElementById("img").src = selectedItem.image;
            
            document.getElementById("shortInfo").textContent = selectedItem.shortInfo;
            document.getElementById("longerInfo").textContent = selectedItem.longerInfo.join(" "); // 合并数组内容为一个字符串
            document.getElementById("fullInfo").textContent = selectedItem.fullInfo;
        document.querySelector("#infoTable tr:nth-child(1) td:nth-child(2)").textContent = selectedItem.info.date;
        document.querySelector("#infoTable tr:nth-child(2) td:nth-child(2)").textContent = selectedItem.info.geography;
        document.querySelector("#infoTable tr:nth-child(3) td:nth-child(2)").textContent = selectedItem.info.medium;
        document.querySelector("#infoTable tr:nth-child(4) td:nth-child(2)").textContent = selectedItem.info.dimension;
        document.querySelector("#infoTable tr:nth-child(5) td:nth-child(2)").textContent = selectedItem.info.constellation;
        document.querySelector("#infoTable tr:nth-child(6) td:nth-child(2)").textContent = selectedItem.info.symbol;
        } else {
            console.warn("Object not found:", itemName);
        }
    }

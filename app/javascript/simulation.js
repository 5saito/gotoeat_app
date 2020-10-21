$(function(){
	var value = 500; // ランチのポイント価格
	var maxNum = 10; // 人数の上限
	var tagInput = $('#jsNum'); // 入力対象のinputタグID名
	var tagOutput = $('#jsPrice'); // 出力対象のinputタグID名
	tagInput.on('change', function() {
		var str = $(this).val();
		var num = Number(str.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
		if(num == 0) {
			num = '';
		} else if (num > maxNum) { // 上限を超える人数を入力した場合
			num = maxNum;
		}
		$(this).val(num);
		if(num != 0) {
			var price = num * value;
			tagOutput.val(price);
		}
	});
});

$(function(){
	var value = 1000; // ディナーのポイント価格
	var maxNum = 10; // 人数の上限
	var tagInput = $('#jsNum2'); // 入力対象のinputタグID名
	var tagOutput = $('#jsPrice2'); // 出力対象のinputタグID名
	tagInput.on('change', function() {
		var str = $(this).val();
		var num = Number(str.replace(/[^0-9]/g, '')); // 整数以外の文字列を削除
		if(num == 0) {
			num = '';
		} else if (num > maxNum) { // 上限を超える人数を入力した場合
			num = maxNum;
		}
		$(this).val(num);
		if(num != 0) {
			var price = num * value;
			tagOutput.val(price);
		}
	});
});
<template>
	<table v-for="(tableData, index) in tableDatas" :key="index">
		<thead>
			<th v-for="item in tableConfig" :key="item.field" :width="item.width">
				{{ item.title }}
			</th>
		</thead>
		<tbody>
			<tr v-for="item in tableData">
				<td style="font-size: 12px">{{ item.key }}</td>
				<td>{{ item.name }}</td>
				<td>
					<code>{{ item.value }}</code>
				</td>
				<td>{{ formatDescription(item.description) || "-" }}</td>
			</tr>
		</tbody>
	</table>
</template>

<script setup lang="ts">
import { computed } from "vue";

interface EnumTable {
	codeStr: string;
	enumName: string;
}
type TEnum = {
	name: string;
	description: string;
	key: string;
	value: string;
};

const props = withDefaults(defineProps<EnumTable>(), {
	codeStr: "",
});

const tableConfig = [
	{
		field: "key",
		title: "枚举",
		width: "18%",
	},
	{
		field: "name",
		title: "名称",
		width: "18%",
	},
	{
		field: "value",
		title: "值",
		width: "18%",
	},
	{
		field: "description",
		title: "描述",
	},
];

const tableDatas = computed<TEnum[][]>(() => {
	return convertAllEnum(props.codeStr);
});

const formatDescription = (desc: TEnum["description"]) => {
	return desc.replace(/[ \t]+/g, "").replace(/\*/g, "");
};

function convertAllEnum(allEnumString: string): TEnum[][] {
	const result: TEnum[][] = [];
	const regex: RegExp = /export enum ([A-Z][a-zA-Z0-9]*)\s*{[\s\S]*?}/g;
	let match: RegExpExecArray | null;
	while ((match = regex.exec(allEnumString)) !== null) {
		if (match[1] == props.enumName) {
			result.push(convertSingleEnum(match[0]));
		}
	}
	return result;
}

function convertSingleEnum(aEnumString: string): TEnum[] {
	const result: TEnum[] = [];
	const nameRegex = "@name\\s([^\\n]*)";
	const descRegex = "@description\\s([\\s\\S]*?)\\*/";
	const enumRegex = "([A-Z_0-9]*)\\s*=\\s*(['\"]([^'\"]*)['\"]|\\d+)";
	const regex = new RegExp(
		`${nameRegex}(?:[\\s\\S]*?${descRegex})?[\\s\\S]*?${enumRegex}`,
		"g"
	);
	let match: RegExpExecArray | null;
	while ((match = regex.exec(aEnumString)) !== null) {
		result.push({
			name: match[1],
			description: match[2] || "",
			key: match[3],
			value: match[5] || match[4],
		});
	}
	return result;
}
</script>

<script lang="ts">
	import type { ChangeEventHandler } from 'svelte/elements';

	const planData: Plan[] = [
		{
			title: 'Arcade',
			img: '/images/icon-arcade.svg',
			price: {
				monthly: {
					amount: 9,
					discount: ''
				},
				yearly: {
					amount: 90,
					discount: '2 months free'
				}
			}
		},
		{
			title: 'Advanced',
			img: '/images/icon-advanced.svg',
			price: {
				monthly: {
					amount: 12,
					discount: ''
				},
				yearly: {
					amount: 120,
					discount: '2 months free'
				}
			}
		},
		{
			title: 'Pro',
			img: '/images/icon-pro.svg',
			price: {
				monthly: {
					amount: 15,
					discount: ''
				},
				yearly: {
					amount: 150,
					discount: '2 months free'
				}
			}
		}
	];

	const addonData: AddOn[] = [
		{
			title: 'Online service',
			description: 'Access to multiplayer games',
			price: {
				monthly: 1,
				yearly: 10
			}
		},
		{
			title: 'Larger storage',
			description: 'Extra 1TB of cloud save',
			price: {
				monthly: 2,
				yearly: 20
			}
		},
		{
			title: 'Customizable profile',
			description: 'Custom theme on your profile',
			price: {
				monthly: 2,
				yearly: 20
			}
		}
	];

	let selectedPlan = $state<number>(0);

	let paymentType = $state<'monthly' | 'yearly'>('monthly');

	const togglePaymentType = () => {
		if (paymentType == 'monthly') {
			paymentType = 'yearly';
		} else {
			paymentType = 'monthly';
		}
	};

	let selectedAddOns = $state<number[]>([]);

	let onSelected: ChangeEventHandler<HTMLInputElement> = (e) => {
		// console.log(e.target?.value);
		// e.target?.dataset['index'];
	};

	let calculateTotal = () => {
		let total = 0;

		if (paymentType == 'monthly') {
			total += planData[selectedPlan].price.monthly.amount;
			selectedAddOns.forEach((ind) => {
				total += addonData[ind].price.monthly;
			});
		} else if (paymentType == 'yearly') {
			total += planData[selectedPlan].price.yearly.amount;
			selectedAddOns.forEach((ind) => {
				total += addonData[ind].price.yearly;
			});
		}

		return total;
	};

	let totalPrice = $derived(calculateTotal());

	let formatPrice = (price: number) => `$${price}/${paymentType === 'monthly' ? 'mo' : 'yr'}`;

	let currentStep = $state<1 | 2 | 3 | 4 | 5>(5);

	const emailRexEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

	let personalInfoForm = $state<{
		name: {
			value: string;
			err: string;
		};
		email: {
			value: string;
			err: string;
		};
		phone: {
			value: string;
			err: string;
		};
	}>({
		name: {
			value: '',
			err: ''
		},
		email: {
			value: '',
			err: ''
		},
		phone: {
			value: '',
			err: ''
		}
	});

	let handleNextStep = () => {
		if (currentStep == 1) {
			if (personalInfoForm.name.value === '') {
				personalInfoForm.name.err = 'This field is required';
			} else {
				personalInfoForm.name.err = '';
			}

			if (personalInfoForm.email.value === '') {
				personalInfoForm.email.err = 'This field is required';
			} else if (!personalInfoForm.email.value.match(emailRexEx)) {
				personalInfoForm.email.err = 'Invalid email format';
			} else {
				personalInfoForm.email.err = '';
			}

			if (personalInfoForm.phone.value === '') {
				personalInfoForm.phone.err = 'This field is required';
			} else {
				personalInfoForm.phone.err = '';
			}

			if (
				!personalInfoForm.name.err &&
				!personalInfoForm.email.err &&
				!personalInfoForm.phone.err
			) {
				currentStep++;
			}
		} else {
			currentStep++;
		}
	};

	let handleAddOnClick = (
		e: MouseEvent & {
			currentTarget: EventTarget & HTMLButtonElement;
		},
		id: number
	) => {
		e.preventDefault();
		if (selectedAddOns.includes(id)) {
			selectedAddOns = [...selectedAddOns.filter((i) => i != id)];
		} else {
			selectedAddOns.push(id);
		}
	};
</script>

<div class="relative flex flex-col md:justify-center md:items-center h-screen">
	<div
		class="bg-sidebarMobile bg-center bg-cover bg-no-repeat h-[172px] w-full flex justify-center p-8 md:hidden"
	>
		<ul class="flex gap-4 items-start">
			<li
				class="{currentStep == 1
					? 'bg-primary-lightBlue text-primary-marineBlue border-none'
					: ''} font-bold text-center w-9 h-9 p-2 border-[1px] border-neutral-white text-neutral-white rounded-full flex justify-center"
			>
				<span class="h-full flex items-center">1</span>
			</li>
			<li
				class="{currentStep == 2
					? 'bg-primary-lightBlue text-primary-marineBlue border-none'
					: ''} font-bold text-center w-9 h-9 p-2 border-[1px] border-neutral-white text-neutral-white rounded-full flex justify-center"
			>
				<span class="h-full flex items-center">2</span>
			</li>
			<li
				class="{currentStep == 3
					? 'bg-primary-lightBlue text-primary-marineBlue border-none'
					: ''} font-bold text-center w-9 h-9 p-2 border-[1px] border-neutral-white text-neutral-white rounded-full flex justify-center"
			>
				<span class="h-full flex items-center">3</span>
			</li>
			<li
				class="{currentStep >= 4
					? 'bg-primary-lightBlue text-primary-marineBlue border-none'
					: ''} font-bold text-center w-9 h-9 p-2 border-[1px] border-neutral-white text-neutral-white rounded-full flex justify-center"
			>
				<span class="h-full flex items-center">4</span>
			</li>
		</ul>
	</div>

	<div class="mx-auto px-1 md:px-4">
		<div
			class=" bg-neutral-white py-8 px-8 md:py-4 md:pl-4 shadow-lg rounded-xl -mt-[73px] md:mt-0 md:flex md:max-w-[940px] md:min-h-[600px]"
		>
			<div
				class="hidden md:flex bg-sidebarDesktop min-w-[274px] bg-cover md:gap-8 px-8 py-10 bg-bottom rounded-xl"
			>
				<ul class="flex flex-col gap-4 md:gap-7 items-start">
					<li class="flex items-center gap-4">
						<div
							class="{currentStep == 1
								? 'bg-primary-lightBlue text-primary-marineBlue border-none'
								: ''} font-bold text-center w-9 h-9 md:w-[33px] md:h-[33px] p-2 border-[1px] border-neutral-white text-neutral-white rounded-full flex justify-center"
						>
							<span class="h-full flex items-center">1</span>
						</div>
						<div class="">
							<p class="text-primary-pastelBlue text-xs">STEP 1</p>
							<h2 class="font-medium text-neutral-white text-sm tracking-wider">
								YOUR INFO
							</h2>
						</div>
					</li>
					<li class="flex items-center gap-4">
						<div
							class="{currentStep == 2
								? 'bg-primary-lightBlue text-primary-marineBlue border-none'
								: ''} font-bold text-center w-9 h-9 md:w-[33px] md:h-[33px] p-2 border-[1px] border-neutral-white text-neutral-white rounded-full flex justify-center"
						>
							<span class="h-full flex items-center">2</span>
						</div>

						<div class="">
							<p class="text-primary-pastelBlue text-xs">STEP 2</p>
							<h2 class="font-medium text-neutral-white text-sm tracking-wider">
								SELECT PLAN
							</h2>
						</div>
					</li>

					<li class="flex items-center gap-4">
						<div
							class="{currentStep == 3
								? 'bg-primary-lightBlue text-primary-marineBlue border-none'
								: ''} font-bold text-center w-9 h-9 md:w-[33px] md:h-[33px] p-2 border-[1px] border-neutral-white text-neutral-white rounded-full flex justify-center"
						>
							<span class="h-full flex items-center">3</span>
						</div>
						<div class="text-sm">
							<p class="text-primary-pastelBlue text-xs">STEP 3</p>
							<h2 class="font-medium text-neutral-white text-sm tracking-wider">
								ADD-ONS
							</h2>
						</div>
					</li>
					<li class="flex items-center gap-4">
						<div
							class="{currentStep >= 4
								? 'bg-primary-lightBlue text-primary-marineBlue border-none'
								: ''} font-bold text-center w-9 h-9 md:w-[33px] md:h-[33px] p-2 border-[1px] border-neutral-white text-neutral-white rounded-full flex justify-center"
						>
							<span class="h-full flex items-center">4</span>
						</div>
						<div class="text-sm">
							<p class="text-primary-pastelBlue text-xs">STEP 4</p>
							<h2 class="font-medium text-neutral-white text-sm tracking-wider">
								SUMMARY
							</h2>
						</div>
					</li>
				</ul>
			</div>

			<div
				class="md:pl-[100px] md:pr-[60px] md:mt-[45px] md:mb-4 md:flex md:flex-col"
			>
					{#if currentStep === 1}
						{@render PersonalInfo()}
					{:else if currentStep === 2}
						{@render Plan(planData)}
					{:else if currentStep === 3}
						{@render AddOns(addonData)}
					{:else if currentStep === 4}
						{@render Final()}
					{:else}
						{@render ThankYou()}
					{/if}
				{#if currentStep < 5}
					<div class="hidden md:block mt-auto">
						{@render BottomNav()}
					</div>
				{/if}
			</div>
		</div>
	</div>

	{#if currentStep < 5}
		<div class="sticky mt-auto md:hidden w-full">
			{@render BottomNav()}
		</div>
	{/if}
</div>

{#snippet PersonalInfo()}
	<h1 class="text-primary-marineBlue font-bold text-2xl mb-2 md:text-3xl">Personal info</h1>
	<p class="font-normal text-neutral-coolGray mb-5 md:mb-8">
		Please provide your name, email address, and phone number.
	</p>

	<div class="flex flex-col gap-4 md:gap-5">
		<div>
			<div class="flex justify-between md:mb-1">
				<label class="text-primary-marineBlue tracking-tighter text-sm" for="name"
					>Name</label
				>
				{#if personalInfoForm.name.err != ''}
					<p class="text-primary-strawberryRed font-medium md:text-sm">
						{personalInfoForm.name.err}
					</p>
				{/if}
			</div>
			<input
				class="hover:border-primary-purplishBlue hover:cursor-pointer w-full font-medium border-[1px] rounded-lg border-neutral-lightGray px-4 py-2 md:py-3 focus:outline-none focus:border-primary-marineBlue focus:text-primary-marineBlue"
				type="text"
				name="name"
				id="name"
				bind:value={personalInfoForm.name.value}
				placeholder="e.g Stephen King"
			/>
		</div>

		<div>
			<div class="flex justify-between md:mb-1">
				<label class="text-primary-marineBlue tracking-tighter text-sm" for="email"
					>Email Address</label
				>
				{#if personalInfoForm.email.err != ''}
					<p class="text-primary-strawberryRed font-medium md:text-sm">
						{personalInfoForm.email.err}
					</p>
				{/if}
			</div>
			<input
				class="hover:border-primary-purplishBlue hover:cursor-pointer w-full font-medium border-[1px] rounded-lg border-neutral-lightGray px-4 py-2 md:py-3 focus:outline-none focus:border-primary-marineBlue focus:text-primary-marineBlue"
				type="text"
				name="email"
				id="email"
				bind:value={personalInfoForm.email.value}
				placeholder="e.g. stephenking@lorem.com"
			/>
		</div>

		<div>
			<div class="flex justify-between md:mb-1">
				<label class="text-primary-marineBlue tracking-tighter text-sm" for="phone"
					>Phone Number</label
				>
				{#if personalInfoForm.phone.err != ''}
					<p class="text-primary-strawberryRed font-medium md:text-sm">
						{personalInfoForm.phone.err}
					</p>
				{/if}
			</div>
			<input
				class="hover:border-primary-purplishBlue hover:cursor-pointer w-full font-medium border-[1px] rounded-lg border-neutral-lightGray px-4 py-2 md:py-3 focus:outline-none focus:border-primary-marineBlue focus:text-primary-marineBlue"
				type="text"
				name="phone"
				id="phone"
				bind:value={personalInfoForm.phone.value}
				placeholder="e.g. +1 234 567 890"
			/>
		</div>
	</div>
{/snippet}

{#snippet Plan(plans: Plan[])}
	<h1 class="text-primary-marineBlue font-bold text-2xl mb-2">Select your plan</h1>
	<p class="font-normal text-neutral-coolGray mb-5">
		You have the option of monthly or yearly billing.
	</p>
	<div class="flex flex-col gap-3 mb-6">
		{#each plans as plan, ind}
			<button
				class="md:hover:border-primary-purplishBlue md:cursor-pointer flex items-start border-[1px] border-neutral-lightGray rounded-md gap-2 p-3
			{selectedPlan == ind ? 'border-primary-purplishBlue bg-neutral-alabaster' : ''}"
				onclick={() => (selectedPlan = ind)}
			>
				<img src={plan.img} alt="{plan.title} image" />
				<div class="flex flex-col items-start">
					<h2 class="font-medium text-primary-marineBlue">{plan.title}</h2>

					<p class="text-neutral-coolGray text-sm">
						{formatPrice(plan.price[paymentType].amount)}
					</p>

					{#if paymentType == 'monthly' && plan.price.monthly.discount != ''}
						<p>{plan.price.monthly.discount}</p>
					{:else if paymentType == 'yearly' && plan.price.yearly.discount != ''}
						<p>{plan.price.yearly.discount}</p>
					{/if}
				</div>
			</button>
		{/each}
	</div>
	<div class="flex gap-3 justify-center bg-neutral-alabaster h-12 items-center rounded-md">
		<p
			class="font-medium {paymentType == 'monthly'
				? 'text-primary-marineBlue'
				: 'text-neutral-coolGray'}"
		>
			Monthly
		</p>
		<input
			type="checkbox"
			name=""
			id=""
			onclick={togglePaymentType}
			checked={paymentType == 'yearly'}
		/>
		<p
			class="font-medium {paymentType == 'yearly'
				? 'text-primary-marineBlue'
				: 'text-neutral-coolGray'}"
		>
			Yearly
		</p>
	</div>
{/snippet}

{#snippet AddOns(addOns: AddOn[])}
	<h1 class="text-primary-marineBlue font-bold text-2xl mb-2">Pick add-ons</h1>
	<p class="font-normal text-neutral-coolGray mb-5">
		Add-ons help enhance your gaming experience.
	</p>

	<div class="flex flex-col gap-4">
		{#each addOns as addOn, ind}
			<button onclick={(e) => handleAddOnClick(e, ind)}>
				<label
					for="${addOn.title}"
					class="flex items-center gap-4 border-[1px] p-4 rounded-md md:hover:border-primary-purplishBlue md:hover:cursor-pointer {selectedAddOns.includes(
						ind
					)
						? 'bg-neutral-alabaster border-primary-purplishBlue'
						: ''}"
				>
					<div>
						<input
							data-index={ind}
							type="checkbox"
							name="check-${addOn.title}"
							id="${addOn.title}"
							class="accent-primary-purplishBlue border border-neutral-lightGray h-5 w-5 text-primary-marineBlue text-sm"
							onselect={onSelected}
							checked={selectedAddOns.includes(ind)}
						/>
					</div>
					<div class="flex-grow text-start">
						<h2 class="font-bold text-sm text-primary-marineBlue">{addOn.title}</h2>
						<p class="text-neutral-coolGray text-xs">{addOn.description}</p>
					</div>
					<div>
						<p class="text-primary-purplishBlue text-xs">
							+{formatPrice(addOn.price[paymentType])}
						</p>
					</div>
				</label>
			</button>
		{/each}
	</div>
{/snippet}

{#snippet Final()}
	<h1 class="text-primary-marineBlue font-bold text-2xl mb-2">Finishing up</h1>
	<p class="text-neutral-coolGray mb-5">Double-check everything looks OK before confirming.</p>

	<div class="p-4 bg-neutral-alabaster rounded-lg">
		<div
			class={`flex pb-3 justify-between items-center ${selectedAddOns.length > 0 ? 'border-b-[1px] border-l-neutral-coolGray' : ''}`}
		>
			<div>
				<h2 class="text-primary-marineBlue font-bold">
					{planData[selectedPlan].title} ({paymentType === 'monthly'
						? 'Monthly'
						: 'Yearly '})
				</h2>
				<button
					class="text-neutral-coolGray underline cursor-pointer"
					onclick={() => (currentStep = 2)}>Change</button
				>
			</div>
			<p class="font-bold text-primary-marineBlue">
				{formatPrice(planData[selectedPlan].price[paymentType].amount)}
			</p>
		</div>
		{#each selectedAddOns as ind}
			<div class="flex justify-between items-center py-2">
				<p class="text-neutral-coolGray">{addonData[ind].title}</p>
				<p class="text-primary-marineBlue">
					+{formatPrice(addonData[ind].price[paymentType])}
				</p>
			</div>
		{/each}
	</div>
	<div class="flex justify-between items-center p-5">
		<p class="text-neutral-coolGray">
			Total (per {paymentType === 'monthly' ? 'month' : 'year'})
		</p>
		<p class="text-primary-purplishBlue font-bold text-lg">{formatPrice(totalPrice)}</p>
	</div>
{/snippet}

{#snippet ThankYou()}
	<div class="flex flex-col items-center py-12 md:mt-[72px]">
		<img src="/images/icon-thank-you.svg" alt="thank you" class="h-14 w-14 md:h-20 md:w-20 mb-6 md:mb-9" />
		<h1 class="font-bold text-primary-marineBlue text-2xl mb-4 md:text-[32px]">Thank you!</h1>
		<p class="text-neutral-coolGray text-center">
			Thanks for confirming your subscription! We hope you have fun using our platform. If you
			ever need support, please feel free to email us at support@loremgaming.com.
		</p>
	</div>
{/snippet}

{#snippet BottomNav()}
	<div
		class="flex items-center w-full h-20 md:h-fit px-4 bg-neutral-white justify-between md:px-0"
	>
		<div>
			{#if currentStep > 1}
				<button
					class="text-neutral-coolGray hover:text-primary-marineBlue font-medium"
					onclick={() => currentStep--}>Go Back</button
				>
			{/if}
		</div>
		<div>
			{#if currentStep < 4}
				<button
					class="bg-primary-marineBlue text-neutral-magnolia h-10 md:h-12 px-4 md:px-6 rounded-lg hover:bg-primary-purplishBlue"
					onclick={handleNextStep}>Next Step</button
				>
			{:else}
				<button
					class="bg-primary-purplishBlue text-neutral-magnolia h-10 md:h-12 px-4 md:px-6 rounded-lg hover:bg-primary-pastelBlue"
					onclick={handleNextStep}>Confirm</button
				>
			{/if}
		</div>
	</div>
{/snippet}
